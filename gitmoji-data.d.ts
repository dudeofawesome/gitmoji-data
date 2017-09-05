declare module 'gitmoji-data' {
  const GitmojiData: {
    gitmojis: {
      emoji: string;
      entity: string;
      code: string;
      description: string;
      name: string;
    }[];
  };
  export = GitmojiData;
}
