function buildTree(items) {
  const map = new Map();
  const roots = [];
  for (const item of items) {
    map.set(item.id, { ...item, children: [] });
  }

  for (const item of items) {
    const node = map.get(item.id);

    if (node.parentId === null) {
      roots.push(node);
    } else {
      const parent = map.get(node.parentId);
      
      if (parent) {
        parent.children.push(node);
      }
    }
  }

  return roots;
}
