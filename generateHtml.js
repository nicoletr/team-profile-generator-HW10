function renderManager(team) {
    return `<div class="col-sm-12 col-md-6 col-lg-3">
                <div class="card custom-card">
                    <div class="card-header">${team[0].name}</div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-briefcase"></i> Manager</h5>
                            <ul class="team-member-details">
                                <li>ID: ${team[0].id}</li>
                                <li>Email: ${team[0].email}</li>
                                <li>Office Number: ${team[0].officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
}

function renderEngineer(team) {
    return `<div class="col-sm-12 col-md-6 col-lg-3">
                <div class="card custom-card">
                    <div class="card-header">${team.name}</div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-wrench"></i> Engineer</h5>
                            <ul class="team-member-details">
                                <li>ID: ${engineer.id}</li>
                                <li>Email: ${engineer.email}</li>
                                <li>GitHub: ${engineer.github}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
}

function renderIntern(intern) {
    return `<div class="col-sm-12 col-md-6 col-lg-3">
                <div class="card custom-card">
                    <div class="card-header">${intern.name}</div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-user-graduate"></i> Intern</h5>
                            <ul class="team-member-details">
                                <li>ID: ${intern.id}</li>
                                <li>Email: ${intern.email}</li>
                                <li>School: ${intern.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
}

function generateHtml(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <script src="https://kit.fontawesome.com/c1b942df5a.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="/dist/style.css">
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
            ${renderManager(team.Manager)}
            ${renderEngineer(team.Engineer)}
            ${renderIntern(team.Intern)}
            </div>
        </main>
    </body>
    
    </html>`
  };
  
module.exports = generateHtml;
  