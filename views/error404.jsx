const React = require('react')
const Def = require('./default')

function error404() {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p className="text-center">Oops, sorry, we can't find this page!</p>
                <div>
                    <img className="img2" src="/images/404error.jpg" alt="funny-horse"/>
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@dan_scape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Cook</a> on <a href="https://unsplash.com/s/photos/funny-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404
