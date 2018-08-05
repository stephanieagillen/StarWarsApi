let button = document.querySelector('#button')

let first 		= document.querySelector('#name')
let height	    = document.querySelector('#height')
let mass 		= document.querySelector('#mass')
let birthYear 	= document.querySelector('#birthYear')


function getInfo(){

	let randomNumber = (Math.floor(Math.random() * 88) + 1)

	let apiUrl = 'https://swapi.co/api/people/' + randomNumber

	axios.get(apiUrl).then(function(response){
		updateInfo(response.data)
	})
}

function updateInfo(data){
	first.innerText 	 = data.name
	height.innerText 	 = 'Height: ' + data.height
	mass.innerText 		 = 'Mass: ' + data.mass
	birthYear.innerText	 = 'Birth Year: ' + data.birth_year

}


button.addEventListener('click', getInfo)
