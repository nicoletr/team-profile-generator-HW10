//Custom Manager card
function renderManager(manager) {
    return `<div class="col-sm-12 col-md-6 col-lg-3">
                <div class="card custom-card">
                    <div class="card-header">${manager.name}</div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-briefcase"></i> Manager</h5>
                            <ul class="team-member-details">
                                <li>ID: ${manager.id}</li>
                                <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                                <li>Office Number: ${manager.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
};

//Custom Engineer card
function renderEngineer(engineer) {
    return `<div class="col-sm-12 col-md-6 col-lg-3">
                <div class="card custom-card">
                    <div class="card-header">${engineer.name}</div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-wrench"></i> Engineer</h5>
                            <ul class="team-member-details">
                                <li>ID: ${engineer.id}</li>
                                <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                                <li>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
};

//Custom Intern card
function renderIntern(intern) {
    return `<div class="col-sm-12 col-md-6 col-lg-3">
                <div class="card custom-card">
                    <div class="card-header">${intern.name}</div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-user-graduate"></i> Intern</h5>
                            <ul class="team-member-details">
                                <li>ID: ${intern.id}</li>
                                <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                                <li>School: ${intern.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
};

function renderEmployees(data) {
    // Empty array for the cards to be added to
    let pageArray = '';
    //Loop through the array
    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        let role = employee.getRole();
        //Render card for role which is returned by getRole()
        if (role === 'Manager') {
            let managerCard = renderManager(employee);
            pageArray = pageArray + managerCard;
        } else if (role === 'Engineer') {
            let engineerCard = renderEngineer(employee);
            pageArray = pageArray + engineerCard;
        } else {
            let internCard = renderIntern(employee);
            pageArray = pageArray + internCard;
        }
    }
    return pageArray;
};

//Render the HTML page 
function generateHTML (employeeCards) {
    const generateTeam = renderEmployees(employeeCards); 
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <script src="https://kit.fontawesome.com/c1b942df5a.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header class="sticky-top">
            <nav class="navbar navbar-expand-lg sitcky-top navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="template.html">My Team</a>
                </div>
            </nav>
        </header>
        <main class="container-fluid">
            <div class="row justify-content-center align-items-start" id="team-members">
            ${generateTeam}
            </div>
        </main>
    </body>
    
    </html>`
  };
  
module.exports = generateHTML;
  