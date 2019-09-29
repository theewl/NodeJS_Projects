const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=>{
    return "Your notes..."
}

const loadNotes = ()=>{
    try{
        const theBuffer = fs.readFileSync('notes.json')
        const theStringed = theBuffer.toString()
        const theJSON = JSON.parse(theStringed)
        return theJSON
    }
    catch(e){
        return []
    }

}

const saveNotes = (notes)=>{
    const newNote = JSON.stringify(notes)
    fs.writeFileSync('notes.json', newNote)
}

const addNote = (title, body)=>{

    const notes = loadNotes()
    const duplicate = notes.find((note)=> title == note.title) 

    debugger

     if(!duplicate){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green("Added new note"))
     }
     else{
         console.log(chalk.red('Note title is taken'))
     }

}

const removeNote = (title)=>{
    const notes = loadNotes()
    const newNotes = notes.filter((note)=>{
        return note.title != title
    })
    saveNotes(newNotes)
    if(notes.length === newNotes.length){
        console.log(chalk.red('Not found'))
    }else{
        console.log(chalk.green(title + ' was deleted'))
    }

}

const listNotes = () =>{
    console.log(chalk.blue.underline('your notes'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) =>{
    const notes = loadNotes()
    const resultNote = notes.find((note)=> note.title == title)

    if(!resultNote){
        console.log(chalk.red('not found'))
    }else{
        console.log(chalk.underline(resultNote.title))
        console.log(resultNote.body)
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}