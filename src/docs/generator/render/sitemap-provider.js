import { removeNumberOnStart } from '../common-provider.js';
import fs from 'fs';
import path from 'path';

export const renderSitemap = (websiteUrl, rootPath, pagesList) => {
  let siteMap = `${ websiteUrl }\n`;

  for(const link of pagesList){
    const formatted = `${ websiteUrl }/pages/${ removeNumberOnStart(link) }.html\n`;
    siteMap += formatted;
  }

  const targetFilePath = path.join(rootPath, 'sitemap.txt')
  fs.writeFileSync(targetFilePath, siteMap, 'utf8');
};