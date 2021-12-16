import React from 'react'
import Image from 'next/image'
import logo from "../assets/logo.png"

function Footer() {
    return (
        <div className="text-white bg-primary2 pb-20">
            <div className="flex flex-col lg:flex-row pt-6">
            <div>
            <Image className="" src={logo} alt="Picture of the author" width={221} height={96}
                 title='hello'   />
            </div>
            <div className="ml-2">
                <h1 className="text-lg font-semibold pb-2">Pages légales</h1>
                <p>Conditions générales d'utilisation</p>
                <p>Politique de confidentialité</p>
                <p>Jeu responsable</p>
            </div>
            <div className="ml-2">
               <h1 className="text-lg font-semibold pb-2">Concours</h1>
               <p>Tous les concours</p>
            </div>
            <div className="ml-2">
                <h1 className="text-lg font-semibold pb-2">Blog</h1>
                <p>Casino</p>
                <p>Guide</p>
                <p>Tous les articles</p>
            </div>
            <div className="ml-2">
                <h1 className="text-lg font-semibold pb-2">Avis casinos</h1>
                <p>Meilleurs casino en ligne</p>
            </div>
           
            </div>

            <div className="pt-10 text-gray-500 text-center m-auto max-w-xl">
                <p >Jeu reponsable : Le joueur est responsable du montant qu'il est capable de jouer. Ne jouez pas de l'argent que vous ne pouvez pas vous permettre de perdre. Ne considérez pas le jeu comme un moyen de gagner de l'argent. Nous vous recommandons de ne pas jouer lorsque vous êtes de mauvaise humeur. Les joueurs sont tenus de vérifier les lois sur les jeux d'argent dans leur pays ou juridiction avant de jouer de l'argent sur un site de jeux en ligne. Si vous avez besoin d'aide ou de soutien, visitez le site www.begambleaware.org ou 0808 8020 133 (EN).</p>
            </div>

            <div className="pt-6 font-normal border-b-4 pb-5 text-center m-auto max-w-xl">
                <p>ATTENTION : Les offres sur notre site sont susceptibles d'évoluer ou d'être annulées. Nous recommandons toujours au joueur d'examiner les conditions et de vérifier le bonus directement sur le site du casino/des sociétés de paris.</p>
            </div>

            <div className="pt-6 font-normal m-auto text-center">
                <p>© HyCasino - Tous droit réservés</p>
            </div>
        </div>
    )
}

export default Footer
