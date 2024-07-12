

console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(images){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const imagecontainer=document.getElementById('dog-image-container')
const breedList=document.getElementById('dog-breeds')
fetch(imgUrl)
.then(res=>res.json())
.then(data=>{
   data.message.forEach(imageUrl=> {
    const img=document.createElement('img')
    img.src=imageUrl

imagecontainer.appendChild(img)
});

})
.catch(error=>console.log(error));

fetch(breedUrl)
.then(res=>res.json())
.then(data=>{
    const breeds=Object.keys(data.message)
    breeds.forEach(breed=>{
        const li=document.createElement('li')
        li.textContent=breed
        breedList.appendChild(li)
    })
})
.catch(error=>console.log(error))
breedList.addEventListener('click',function(event){
    if(event.target.tagName==="LI"){
        event.target.style.color='orangered'
    }
})
const selectBreed=document.getElementById('breed-dropdown')
selectBreed.addEventListener('change', function(event){
    const selectedLetter=event.target.value
    const breeds=breedList.getElementsByTagName('li')
    for(let i = 0; i < breeds.length; i++){
        const breedName = breeds[i].textContent.toLowerCase()
        if(selectedLetter === '' || breedName.startsWith(selectedLetter)){
            breeds[i].style.display='block'
        }else{
            breeds[i].style.display='none'
        }
    }
})
})
