/*var name = "Sethya Thet";
var role = "Senior Web Developer, Front-End Web Developer, Full Stack Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);*/
/*==========
var bio = {
	"name": "Sethya Thet",
	"role": "Web Developer",
	"contactinfo": "sethyathet@gmail.com",
	"pictureurl": "images/david.jpg",
	"message": "Welcome to my personal website.",
	"skills": "Web Developer, Software Developer, Senior Web Developer, Full Stack Web Developer"
};

$('#main').append(bio.name);
$('#main').append(bio.role);
$('#main').append(bio.contactinfo);
$('#main').append(bio.pictureurl);
$('#main').append(bio.message);
$('#main').append(bio.skills);

var workObject = {
	"jobposition": "Student",
	"employer": "No employer",
	"yearsworked": "No years worked",
	"city": "Boston"
};
var educationobject = {
	"schoolname": "Lynn Classical High School",
	"years": "2012-2015",	
	"city": "Boston"	
};
$("#main").append(workObject["jobposition"]);
$("#main").append(educationobject.schoolname);==========*/
//work and project object
//bio and education object
var work = {
    "jobs": [{
        "employer": "BostonInteractive",
        "title": "Front-End Web Developer",
        "location": "Charlestown, MA",
        "dates": "March 2016 - Present",
        "description": "This is the best job ever."
    }, {
        "employer": "InSegment",
        "title": "Senior Web Developer",
        "location": "Newton, MA",
        "dates": "November 2015 - January 2016",
        "description": "This is the best job ever."
    }, {
        "employer": "Franciscan Hospital for Children",
        "title": "Intranet Web Developer",
        "location": "Boston, MA",
        "dates": "July 2015 - November 2015",
        "description": "This is the best job ever."
    }]
};
var bio = {
    "name": "Sethya Thet",
    "role": "Front-End Web Developer, Senior Web Developer, Full Stack Web Developer, Software Engineer",
    "skills": [
        "HTML", "CSS", "JavaScript", "jQuery", "JSON", "AJAX", "Bootstrap", "AngularJS", "jQuery UI", "PHP"
    ],
    "contacts": {
        "email": "sethyathet@gmail.com",
        "github": "bostonhuman",
        "location": "Boston, MA"
    },
    "welcomeMessage": "Welcome to my personal website.",

    "bioPic": "images/david.jpg"

};
var education = {
    "schools": [{
            "name": "Harvard Extension School",
            "location": "Cambridge, MA",
            "degree": "Professional Graduate Degree",
            "majors": "Computer Science",
            "dates": "2015-2019",
            "url": "https://www.extension.harvard.edu/"
        }, {
            "name": "Lynn Classcial High School",
            "location": "Lynn, MA",
            "degree": "High School Diploma",
            "majors": "General Subjects",
            "dates": "2012-2015"
        }

    ],
    "onlinecourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Senior Web Developer",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/senior-web-developer-nanodegree--nd802"
    }, {
        "title": "Full Stack Web Developer",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    }, {
        "title": "Computer Science",
        "school": "HarvardX",
        "dates": 2015,
        "url": "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
    }, {
        "title": "Computer Science",
        "school": "MITx",
        "dates": 2015,
        "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x8"
    }]
};
var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2016",
        "description": "This is my sample project",
        "images": [
            "images/project1.jpg",
            "images/project1.jpg"
        ]
    }]
};

function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedmessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(formattedemail);
    $("#header").append(formattedgithub);
    $("#header").append(formattedlocation);
    $("#header").append(formattedmessage);
    $("#header").append(formattedbiopic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
        $("#skills").append(formattedSkill);
    }
}
displayBio();

function displayWork() {


    for (var job in work.jobs) {
      if(work.jobs.hasOwnProperty(job)) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
    }
    $(document).click(function(loc) {
        var x = loc.pageX;
        var y = loc.pageY;

        logClicks(x, y);
    });
}


displayWork();


/*function locationizer(work_obj) {
    var locationArray = [];
    
    for (job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);*/

projects.display = function() {
    for (var project in projects.projects) { 
      if(projects.projects.hasOwnProperty(projects)) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
              if(projects.projects[project].images.hasOwnProperty(image)) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
            }}
      }}
};
projects.display();

education.display = function() {
    for (var edu in education.schools) {
      if(education.schools.hasOwnProperty(edu)){
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        $("#education").append(formattedschoolName);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        $("#education").append(formattedschoolDegree);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $("#education").append(formattedschoolMajor);

        var formattedschoolDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $("#education").append(formattedschoolDate);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $("#education").append(formattedschoolLocation);
      }}

    $("#education").append(HTMLonlineClasses);
    for (var online in education.onlinecourses) {
      if(education.onlinecourses.hasOwnProperty(online)){
        //$("#education").append(HTMLonlineClasses);

        //var formattedonlineClasses = HTMLonlineClasses;
        //$("#education").append(formattedonlineClasses);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[online].title);
        $("#education").append(formattedonlineTitle);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[online].school);
        $("#education").append(formattedonlineSchool);

        var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlinecourses[online].dates);
        $("#education").append(formattedonlineDate);

        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[online].url);
        $("#education").append(formattedonlineURL);
      }}
};
education.display();

//function displayMap() {
$("#mapDiv").append(googleMap);
//}
//displayMap();

function footerInfo() {

    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#footerContacts").append(formattedemail);
    $("#footerContacts").append(formattedgithub);
    $("#footerContacts").append(formattedlocation);
}
footerInfo();