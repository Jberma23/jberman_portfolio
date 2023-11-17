import { useState } from "react";

const searchBar = (posts) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="relative w-full mb-4">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e)}
          placeholder="Search articles"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredBlogPosts
          // .filter((_, i) => i % 3 === 0)
          .map((project) => (
            <Card key={project.slug}>
              <Article blog={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
      </div>
    </>
  );
};
