const fs = require('fs');

// reading from a file

// fs.readFile('./docs/blog1.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// write to file

// fs.writeFile('./docs/blog2.txt', 'hello favour', () => {
//     console.log('written successfully...');
// })

// append to file
// fs.appendFile('./docs/blog2.txt', '\nhello favour', () => {
//     console.log('written successfully...');
// })

// create directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("directories created...")
        }
    }  
    )
} else {
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err.toString())
        }
        else {
        console.log('deleted...')
    } 
    } )
}

// delete a file

if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt', (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('file deleted...')
        }
    })
}
