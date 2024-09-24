import { Link, useParams } from "react-router-dom";
import { COMMUNITIES } from "../config";
import "../styles/sidebar.css";

const SidebarLink = ({ text, subreddit, currentSubreddit }) => {
  const active = currentSubreddit === subreddit;

  return (
    <li className={active ? "sidebar__item active" : "sidebar__item"}>
      <Link to={`r/community/${subreddit}`} className="sidebar__link">
        <span className="sidebar__link-text">{text}</span>
      </Link>
    </li>
  );
};

const Sidebar = ({ isOpen }) => {
  const params = useParams();
  // set popular as default community page
  const currentSubreddit = params["subreddit"] || "Popular";

  return (
    <aside className={isOpen ? "sidebar open" : "sidebar"}>
      <nav className="sidebar__nav">
        <h3 className="sidebar__heading">Communities</h3>
        <ul className="sidebar__list">
          {COMMUNITIES.map((topic) => (
            <SidebarLink
              key={topic.topic}
              text={topic.topic}
              subreddit={topic.subreddit}
              currentSubreddit={currentSubreddit}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
