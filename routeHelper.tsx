// Example: console.log(getRouteList(app_routes, 'localhost'));

export const getRouteList = (routes: any, appBasePath: string) => {
  return buildRoutePath(routes)
    ?.flat(10)
    .filter((x: string) => x !== '' && x !== '/')
    .map((x: string) => `${appBasePath}` + x);
};

interface ResolvedRoute {
  path: string;
  children: ResolvedRoute[];
  props: { children: ResolvedRoute[] };
}

function buildRoutePath(routes: ResolvedRoute[], curPath = ''): string[] | null | undefined {
  const finalRoutes = routes?.map((element: ResolvedRoute) => {
    let routesArray: any = [];
    let currentPathWithSlashIfNeeded = '';

    const path = element?.path || '';
    const children = element?.children || element?.props?.children;

    // concatenates path to child paths to form the overall route.
    if (curPath === '' || curPath === '/') {
    } else {
      currentPathWithSlashIfNeeded = curPath + '/';
    }
    if (children) {
      const tempChildren = Array.isArray(children) ? children : [children];
      routesArray = buildRoutePath(tempChildren, currentPathWithSlashIfNeeded + path);
      return routesArray;
    } else {
      var finalPath = path ? currentPathWithSlashIfNeeded + path : curPath;
      return finalPath;
    }
  });
  return finalRoutes;
}
