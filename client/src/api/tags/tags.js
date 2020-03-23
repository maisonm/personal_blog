export const tags_routes = {
  add_tags: async config => {
    try {
      const addTags = await fetch('/v1/tags/add_tags', config);

      if (!addTags) throw new Error('Failed to add tags.');
      else return addTags;
    } catch (error) {
      let err = {
        status: 400,
        message: err.message
      };
    }
  }
};
