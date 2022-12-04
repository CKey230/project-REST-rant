const React = require('react')
const Def = require('./default')

function home() {
    return(
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img className="img1" src="/images/cheeseburger.jpg" alt="cheeseburger"/>
            </div>
            <div className="img1">
                Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/s/photos/cheeseburger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
    )
}

module.exports = home