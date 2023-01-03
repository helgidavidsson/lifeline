const country = document.getElementById('country')

const female = document.getElementById('female')

const male = document.getElementById('male')

const userLifeEx = document.getElementById('userLifeEx')

const dateOfBirth = document.getElementById('dateOfBirth')

var userAge = document.getElementById('userAge')

var displayUserPercent = document.getElementById('displayUserPercent')




var today = new Date();
    var todaydd = String(today.getDate()).padStart(2, '0');
    var todaymm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var todayyyyy = today.getFullYear();



displayUserPercent.innerText = '0%'





var selectedGender = ''


female.addEventListener('click', () => {
    selectedGender = 'female'
    findLifeEx()
    loadBar()
})

male.addEventListener('click', () => {
    selectedGender = 'male'
    findLifeEx()
    loadBar()
})


var femaleDiv = document.getElementById('femaleDiv')

var maleDiv = document.getElementById('maleDiv')



femaleDiv.addEventListener('click', () => {
    femaleDiv.style.opacity = '1'
    maleDiv.style.opacity = '0.3'
} )

maleDiv.addEventListener('click', () => {
    maleDiv.style.opacity = '1'
    femaleDiv.style.opacity = '0.3'
    
} )



femaleDiv.addEventListener('mouseover', () => {
    femaleDiv.style.opacity = '1'
})




maleDiv.addEventListener('mouseover', () => {
    maleDiv.style.opacity = '1'
})


femaleDiv.addEventListener('mouseout', () => {
    if (selectedGender == 'male') {
        femaleDiv.style.opacity = '0.3'
    } else if (selectedGender == 'female') {
        femaleDiv.style.opacity = '1'
    } else {
        femaleDiv.style.opacity = '0.3'
    }
    
})


maleDiv.addEventListener('mouseout', () => {
    if (selectedGender == 'female') {
        maleDiv.style.opacity = '0.3'
    } else if (selectedGender == 'male'){
        maleDiv.style.opacity = '1'
    } else {
        maleDiv.style.opacity = '0.3'
    }
    
})



userLifeEx.innerText = '00.00'

 userAge.innerText = '00.00'

var userCountryRank = document.getElementById('userCountryRank')

var sleepLabel = document.getElementById('sleepLabel')


country.addEventListener('change', () => {
    
    


    for(let i=0; i < 202; i++) {
        
        if(country.value == i){
            userCountryRank.innerText = 'World Rank #'+ exData [i][1]

        } else if (country.value == '59') {
            userCountryRank.innerText = ''

        } else if(country.value == 'n') {
            userCountryRank.innerText= ''
        }
    }
    

} )

function findLifeEx() {
    userLifeEx.innerText = '00.00'

    

    for (let i = 0; i < 202; i++) {
        
        if (country.value == i && selectedGender == 'female') {
        userLifeEx.innerText = exData[i][3]
       
        
    } else if (country.value == i && selectedGender == 'male') {
        userLifeEx.innerText = exData[i][4]
       
    } 
    } 

    loadBar()
}



dateOfBirth.addEventListener('change', () => {
     
    var dateValue = dateOfBirth.value
   
  
    var dateOfBirthdd = dateValue.split('-')[2]
    var dateOfBirthmm = dateValue.split('-')[1]
    var dateOfBirthyyyy = dateValue.split('-')[0]

    var userAgeYears = todayyyyy - dateOfBirthyyyy
    var userAgeMonths = todaymm - dateOfBirthmm + 1 //+1 bc january starts at 0
    var userAgeDays = todaydd - dateOfBirthdd

   var daysThisYear = 30.4375 * userAgeMonths + userAgeDays

   var daysThisYearPer = daysThisYear / 365.24

    userAge.innerText = (Math.round((userAgeYears + daysThisYearPer) * 100) /100).toFixed(2)



   var userDaysLeft = userLifeEx.innerText - userAge

   loadBar()

   
 
})

var userSleep = document.getElementById('userSleep')
userSleep.addEventListener('change', () => {
    var dateValue = dateOfBirth.value
   
    
    var dateOfBirthdd = dateValue.split('-')[2]
    var dateOfBirthmm = dateValue.split('-')[1]
    var dateOfBirthyyyy = dateValue.split('-')[0]

    var userAgeYears = todayyyyy - dateOfBirthyyyy
    var userAgeMonths = todaymm - dateOfBirthmm + 1 //+1 bc january starts at 0
    var userAgeDays = todaydd - dateOfBirthdd

   var daysThisYear = 30.4375 * userAgeMonths + userAgeDays

   
    var totalDaysLived = userAgeYears * 365.24 + daysThisYear
    var totalHoursLived = totalDaysLived * 24

    var sleepProgress = document.getElementById('sleepProgress')


    
    for (let i=1; i < 13; i++) {
        if (userSleep.value == [i]) {
            var sleepPercent = ([i] * totalDaysLived / totalHoursLived) * 100
            sleepProgress.style.width = sleepPercent + '%'
            console.log(sleepPercent)
            sleepLabel.style.display = 'block'
            
        } else if( userSleep.value == "0") {
            sleepProgress.style.width = '0%'
            sleepLabel.style.display = 'none'
        }
    }
    

})



var userWork = document.getElementById('userWork')
var workStart = document.getElementById('workStart') 

userWork.addEventListener('change', () => {
    loadWork()
})


workStart.addEventListener('change', () => {
    loadWork()
})


function loadWork() {


    var dateValue = dateOfBirth.value
   
    
    var dateOfBirthdd = dateValue.split('-')[2]
    var dateOfBirthmm = dateValue.split('-')[1]
    var dateOfBirthyyyy = dateValue.split('-')[0]

    var userAgeYears = todayyyyy - dateOfBirthyyyy
    var userAgeMonths = todaymm - dateOfBirthmm + 1 //+1 bc january starts at 0
    var userAgeDays = todaydd - dateOfBirthdd

    var daysThisYear = 30.4375 * userAgeMonths + userAgeDays



    var userAgeWeeks = (userAge.innerText * 365.24) / 7

    var workStartSince = (todayyyyy - workStart.value + (todaymm / 12)) // in years

    var workHours = userWork.value / 168 // Fraction of work hours per week

    var yearsWorked = (workStartSince * workHours)
    
    
    var workPercentage = (yearsWorked / userAge.innerText) * 100
	
var workLabel = document.getElementById('workLabel')

if (userWork.value == 0) {
	workLabel.style.display = 'none'
} else {
    workLabel.style.display = 'block'
}

    var workProgress = document.getElementById('workProgress').style.width = workPercentage + '%'
    
    
}

var screenTimeLabel = document.getElementById('screenTimeLabel')
var userScreenTime = document.getElementById('userScreenTime')
var userFirstPhone = document.getElementById('userFirstPhone')
userScreenTime.addEventListener('change', () => {
    findScreenTime()

})

userFirstPhone.addEventListener('change', () => {
    findScreenTime()
})

function findScreenTime() {
    var dateValue = dateOfBirth.value
    
        
        var dateOfBirthdd = dateValue.split('-')[2]
        var dateOfBirthmm = dateValue.split('-')[1]
        var dateOfBirthyyyy = dateValue.split('-')[0]

        var userAgeYears = todayyyyy - dateOfBirthyyyy
        var userAgeMonths = todaymm - dateOfBirthmm + 1 //+1 bc january starts at 0
        var userAgeDays = todaydd - dateOfBirthdd

        var daysThisYear = 30.4375 * userAgeMonths + userAgeDays

    
        var totalDaysLived = userAgeYears * 365.24 + daysThisYear

        var totalHoursLived = totalDaysLived * 24

        var yearsSincePhone = userFirstPhone.value - dateOfBirthyyyy
        var  daysSincePhone = totalDaysLived - yearsSincePhone * 365.24  
        var hoursSincePhone = daysSincePhone * 24


        var screenTimeProgress = document.getElementById('screenTimeProgress')


        
        for (let i=1; i < 13; i++) {
            if (userScreenTime.value == [i]) {
                var screenTimePercent = ([i] * daysSincePhone) / totalHoursLived * 100
                screenTimeProgress.style.width = screenTimePercent + '%'
                screenTimeLabel.style.display = 'block'
                
                console.log(daysSincePhone)
                console.log(hoursSincePhone)
                console.log(screenTimePercent)
                console.log(userFirstPhone.value)
                
            } else if( userScreenTime.value == "0") {
                screenTimeProgress.style.width = '0%'
                screenTimeLabel.style.display = 'none'
            }
        }
    
}




function loadBar() {



    var userPercentLife = (userAge.innerText / userLifeEx.innerText) * 100

    

    
    var progressBar = document.getElementById('lifeProgress')

   
    if (userPercentLife <= 100) {
        progressBar.style.width = userPercentLife + '%'
        console.log(userPercentLife)
        displayUserPercent.innerText = Math.trunc(userPercentLife)  + '%'
        
    } else if (userPercentLife <= 150) {
        progressBar.style.width = '100%'
    } else if (userPercentLife > 150 ) {
        progressBar.style.width = '0%'
    }
    





}
