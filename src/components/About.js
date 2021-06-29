import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <p>
                Daily Task Tracker is an app which tracks the tasks for the day.
                You can add the tasks that you want to complete in a day. 
                Double clicking the task will make it active, meaning the task 
                you're currently doing. Once you're done with a task you can 
                remove it.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                This App runs on a mock JSON server for the backend.
                <br></br>
                <br></br>
            </p>
            <Link to = "/" className = "link" >HOME</Link>
        </div>
    )
}

export default About
