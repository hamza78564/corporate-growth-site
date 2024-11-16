"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownUpAcrossLine,
  faArrowUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFolder,
  faStar,
  faCircleUser,
  faBars,
} from "@fortawesome/free-regular-svg-icons";
import Header2 from "../Header2/page";

export default function Tools() {
  const items = [
    {
      id: "checkbox2",
      name: "Marketing Tools 2",
      date: "Jan 4, 2010",
      views: 38,
      favorites: 0,
      contributors: "Member",
    },
    {
      id: "checkbox3",
      name: "Marketing Tools 3",
      date: "Jan 4, 2002",
      views: 38,
      favorites: 0,
      contributors: "Member",
    },
    {
      id: "checkbox4",
      name: "Marketing Tools 4",
      date: "Jan 4, 2024",
      views: 38,
      favorites: 0,
      contributors: "Member",
    },
  ];

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    inputval: "",
  });

  const [none, setNone] = useState(true);
  const [sort, setSort] = useState(true); // Default to sorting by name in ascending order
  const [sortByDate, setSortByDate] = useState(false);

  // Handle sorting by name
  const handleSort = () => {
    setSort(!sort);
    setSortByDate(false);
  };

  // Handle sorting by date
  const handleSortByDate = () => {
    setSortByDate(!sortByDate);
    setSort(false);
  };

  // Sort items by name
  const sortByName = (items) => {
    return [...items].sort(
      (a, b) =>
        sort
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
    );
  };

  // Sort items by date
  const sortByDateFunc = (items) => {
    return [...items].sort((a, b) =>
      sortByDate
        ? sort
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date)
        : 0
    );
  };

  // Handle search
  const handleSearch = () => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(checkboxes.inputval.toLowerCase())
    );
  };

  // Determine which sorting function to use
  const sortedItems = sortByDate ? sortByDateFunc(items) : sortByName(items);

  return (
    <div className="tools">
      <Header2 />

      <div className="mainTools">
        <div className="texts">
          <div className="cont">
            <h1>TOOLS & TIPS</h1>
            <p>
              Use this area to upload files you wish to share with your users.
              You can manage who has access to your files and what they can do,
              such as view & download, upload items and more.
            </p>
          </div>
        </div>
        <div className="folders">
          <div className="mainfolder">
            <div className="folderName">
              <span>Files & Folders</span>
            </div>
            <div className={none ? "search-Folders" : "none"}>
              <div className="wid">
                <FontAwesomeIcon icon={faSearch} />
                <input
                  type="text"
                  placeholder="Search 'Files & Folders'"
                  value={checkboxes.inputval}
                  onChange={(ev) => {
                    setCheckboxes({
                      ...checkboxes,
                      inputval: ev.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                checked={checkboxes.checkbox1}
                onChange={(ev) => {
                  const isChecked = ev.target.checked;
                  setCheckboxes({
                    checkbox1: isChecked,
                    checkbox2: isChecked,
                    checkbox3: isChecked,
                    checkbox4: isChecked,
                    inputval: checkboxes.inputval,
                  });
                }}
              />
              {!none && (
                <div style={{ marginTop: " -25px", marginLeft: "30px" }}>
                  <span className="mb-5">{selectedCount} item(s) selected</span>
                </div>
              )}
              <div className={none ? "itemName " : "none"}>
                <span style={{ cursor: "pointer" }} onClick={handleSort}>
                  Item Name <FontAwesomeIcon icon={faArrowUp} />
                </span>
              </div>
            </div>
            <div className={none ? "list-items " : "none "}>
              <ul>
                <li onClick={handleSortByDate} style={{ cursor: "pointer" }}>
                  Last Update
                </li>
                <li>Views</li>
                <li>Favorites</li>
                <li>Contributors</li>
                <li>
                  <FontAwesomeIcon icon={faArrowDownUpAcrossLine} />
                </li>
              </ul>
            </div>
            <div className={none ? "" : "boss"}>
              {(checkboxes.inputval ? handleSearch() : sortedItems).map((evv) => (
                <div className="folder" key={evv.id}>
                  <div className="folderContent">
                    <div className="folder-Cont">
                      <span>{evv.name}</span>
                      <span>0 Items</span>
                    </div>
                  </div>
                  <div className="iconFolder">
                    <input
                      type="checkbox"
                      checked={checkboxes[evv.id]}
                      onChange={(ev) => {
                        setCheckboxes({
                          ...checkboxes,
                          [evv.id]: ev.target.checked,
                        });
                      }}
                    />
                    <FontAwesomeIcon icon={faFolder} />
                  </div>

                  <div className="ul">
                    <ul>
                      <li>{evv.date}</li>
                      <li>{evv.views}</li>
                      <li>
                        <FontAwesomeIcon icon={faStar} className="me-2" />
                        {evv.favorites}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleUser} />
                        {evv.contributors}
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faBars}
                          className={none ? "" : "none"}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1
            style={{
              color: "#656514;",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            Warning: This Page Don’t Work Yet!
          </h1>
        </div>
      </div>
    </div>
  );
}
