import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkExternalLinks from "remark-external-links";

const postDirectory = path.join(process.cwd(), "src", "blogposts");

export const getSortedPost = (): BlogPost[] => {
  const filenames = fs.readdirSync(postDirectory);
  const allPostData = filenames.map((file) => {
    // remove .md in file name
    const id = file.replace(/\.md$/, "");

    // read markdown file
    const fullPath = path.join(postDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse metadata
    const matterResult = matter(fileContent);

    const blogpost: BlogPost = {
      id,
      date: matterResult.data.date,
      title: matterResult.data.title,
    };

    return blogpost;
  });

  return allPostData.sort((a, b) => a.date < b.date ? 1 : -1);
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(remarkExternalLinks)
    .use(remarkHtml)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  const blogPostWithHtml: BlogPost & {contentHtml: string} = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml
  } 

  return blogPostWithHtml
};
