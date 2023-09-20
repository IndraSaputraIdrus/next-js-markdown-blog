import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date)

  return (
    <li className="leading-none">
      <Link href={`/posts/${id}`} className="text-black font-semibold hover:text-black/50">{title}</Link>
      <p className="text-sm text-gray-600">{formattedDate}</p>
    </li>
  );
}

export default ListItem;
