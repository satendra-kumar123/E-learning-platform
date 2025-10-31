
function links(props) {
  return <>
    <a href="" className="p-2 rounded-xl hover:bg-blue-400 text-yellow-200 text-xl font-medium  w-[90%]">{props}</a>
  </>
}

function Sidebar(props) {
  return (
    <> 
      <aside className="w-1/4 h-screen border border-r-white bg-blue-600 fixed left-0" aria-label="Sidebar">
        <div className="flex items-center cursor-pointer m-4 p-4 gap-8 shadow-lg rounded-2xl border border-white">
            <img src={props.img} alt="" className="rounded-full border-2 border-amber-200 h-15 w-15" />
          <div className="text-white text-xl font-semibold">
            <p>{props.name}</p>
            <p className="text-lg font-normal">{props.username}</p>
          </div>
        </div>

        <div className="w-[90%] h-max mt-8 m-auto p-4 rounded-xl shadow-xl grid border border-white">
          {links("Dashboard")}
          {links("Students")}
          {links("Assignments")}
          {links("Quizzes")}
          {links("Settings")}
        </div>

        <div className="w-[90%] h-max m-auto mt-10 p-3  shadow-xl grid rounded-xl border border-white">
          {links("Profile")}
          {links("Logout")}
        </div>
      </aside>
      
    </>
  )
}

export { links, Sidebar };