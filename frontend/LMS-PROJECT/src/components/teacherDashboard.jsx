import {Sidebar} from "../../components/Sidebar.jsx";
import Box from "../../components/Box.jsx";
import Card from "../../components/Card.jsx";
import { Button } from "../../components/Button.jsx";
function TeacherDashboard() {
    const style = " gap-4 p-4 m-4 shadow rounded-lg"
    return (
        <>
            <div className=' w-full flex'>
                <Sidebar name="Satendra Kumar" username="s_kumar" img="https://img.freepik.com/free-photo/young-indian-man-dressed-trendy-outfit-monitoring-information-from-social-networks_231208-2766.jpg"/>
                <main className="w-3/4 ml-auto ">
                    <h1 className="text-center w-full sticky top-0 z-50 p-4 text-4xl font-bold text-white shadow bg-blue-600 rounded-[0_0_1rem_1rem]">Teacher Dashboard</h1>
                    <section className={`${style} grid grid-cols-4 justify-around bg-blue-50/20` }>
                        <h1 className="col-span-4 text-4xl font-bold text-blue-600">Analytics</h1>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </section>
                    <section className='grid grid-cols-3 m-4 p-4 shadow rounded-lg'>
                        <div className="col-span-3 flex justify-between items-center">
                            <h1 className="text-4xl font-bold text-blue-600">Courses</h1>
                            <Button type="Add new course"/>
                        </div>
                        <div className="col-span-3 flex justify-between mt-4 mb-4">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                        <div className="col-span-3">
                            <Button type="view all"/>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default TeacherDashboard;