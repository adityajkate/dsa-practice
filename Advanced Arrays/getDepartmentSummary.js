function getDepartmentSummaries(users, departments) {
  const deptStats = users.reduce((acc, user) => {
    if (!acc[user.deptId]) {
      acc[user.deptId] = { totalSalary: 0, topEarner: null, maxSalary: -Infinity };
    }

    acc[user.deptId].totalSalary += user.salary;

    if (user.salary > acc[user.deptId].maxSalary) {
      acc[user.deptId].maxSalary = user.salary;
      acc[user.deptId].topEarner = user.name;
    }

    return acc;
  }, {});

  return departments.map(dept => {
    const stats = deptStats[dept.id] || { totalSalary: 0, topEarner: null };
    
    return {
      deptName: dept.name,
      totalSalary: stats.totalSalary,
      topEarner: stats.topEarner
    };
  });
}
