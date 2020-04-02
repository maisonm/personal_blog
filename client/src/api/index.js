import { blog_routes } from '../api/blog/blog';
import { tags_routes } from '../api/tags/tags';
import { fetch_config } from './fetch_config/fetch_config';

export const routes = {
  fetch_config,
  blog: blog_routes,
  tags: tags_routes
};