export type Route = {
  path: string;
  id: string;
  name: string;
};

export const Router = {
  Profile: {
    path: "/",
    id: "Profile",
    name: "プロフィール",
  } as Route,
  Works: {
    path: "/works",
    id: "Works",
    name: "職務経歴書",
  } as Route,
  Output: {
    path: "/output",
    id: "Output",
    name: "アウトプット",
  } as Route,
} as const;

export type Router = typeof Router[keyof typeof Router];

export const Routes = Object.values(Router);
