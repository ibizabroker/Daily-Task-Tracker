import { useState } from 'react'

function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    function onSubmit(e) {
        e.preventDefault()

        if(!text) {
            alert('Please add a task');
            return
        }

        if(!time) {
            alert('Please enter a deadline');
            return
        }

        onAdd({ text, time, reminder })

        setText('')
        setTime('')
        setReminder(false)
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <lable>Task</lable>
                <input 
                    type = 'text' 
                    placeholder = 'Add Task' 
                    value = {text} 
                    onChange = {(e) => setText(e.target.value)} 
                />
            </div>
            <div className = 'form-control'>
                <lable>Deadline</lable>
                <input 
                    type = 'text' 
                    placeholder = 'Add Time' 
                    value = {time} 
                    onChange = {(e) => setTime(e.target.value)}
                />
            </div>
            <div className = 'form-control form-control-check'>
                <lable>Set Reminder</lable>
                <input 
                    type = 'checkbox' 
                    checked = {reminder} 
                    value = {reminder} 
                    onChange = {(e) => setReminder(e.currentTarget.checked)} 
                />
            </div>

            <input type = 'submit' value = 'Save Task' className = 'btn btn-block'/>
        </form>
    )
}

export default AddTask
