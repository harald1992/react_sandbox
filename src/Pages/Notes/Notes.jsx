import React, { useEffect } from "react"
import Sidebar from "./Sidebar"
import Editor from "./Editor"
// import { data } from "./data"
import Split from "react-split"
// import { nanoid } from "nanoid"
import notesStyling from './notesStyling.css';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { v4 as uuidv4 } from 'uuid';
import { deleteIndex } from "./NotesFunctions";

export default function Notes() {

    const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem('notes')) || [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])

    function createNewNote() {
        const newNote = {
            id: uuidv4(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        setNotes(oldNotes => {
            let newNote = findCurrentNote();
            newNote.body = text;
            let filteredNotes = oldNotes.filter(note => note.id !== currentNoteId);
            filteredNotes.unshift(newNote);
            return filteredNotes;
        })



        // setNotes(oldNotes => oldNotes.map(oldNote => {

        //     return oldNote.id === currentNoteId
        //         ? { ...oldNote, body: text }
        //         : oldNote
        // }))
    }

    function deleteNote(event, noteId) {
        event.stopPropagation();
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
    }

    function deleteIndex(array, index) {
        array.splice(index, 1);
        return array;
    }


    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                        {
                            currentNoteId &&
                            notes.length > 0 &&
                            <Editor
                                currentNote={findCurrentNote()}
                                updateNote={updateNote}
                            />
                        }
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                    </div>

            }
        </main>
    )
}