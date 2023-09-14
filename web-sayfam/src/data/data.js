import JavascriptLogo from "../assets/js.png"
import ReactLogo from "../assets/react.png"
import ReduxLogo from "../assets/redux.png"
import NodeLogo from "../assets/node.png"
import VsCodeLogo from "../assets/vsCode.png"
import FigmaLogo from "../assets/figma.png"
import ProjectPicture1 from "../assets/ProjectPictures1.png"
import ProjectPicture2 from "../assets/Journey.png"
import JavascriptDark from "../assets/jsDark.png"
import ReactDark from "../assets/reactDark.png"
import ReduxDark from "../assets/reduxDark.png"
import nodeDark from "../assets/nodeDark.png"
import vsDark from "../assets/vscDodeDark.png"
import figmaDark from "../assets/figmaDark.png"
import pizzaResim from "../assets/pizzasitesi.png"
import todolist from "../assets/todolist.png"

const data = {
    tr: {
        header: {
            name: "BURAK",
            title: "Ben Bir Fullstack",
            titleSecond: "Developerım...",
            description: "...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ürünleri oluşturmayı seven.",
            to: "TO",
            languageSwitch: "ENGLISH"
        },
        skills: {
            skils: "Yetenekler",
            skillsArray1: [JavascriptLogo, ReactLogo, ReduxLogo],
            skillsArray2: [NodeLogo, VsCodeLogo, FigmaLogo],
            skillsDarkArray1: [JavascriptDark, ReactDark, ReduxDark],
            skillsDarkArray2: [nodeDark, vsDark, figmaDark]
        },
        profile: {
            profile: "Profil Bilgilerim",
            title: "Genel Bilgilerim",
            birthday: "Doğum Tarihi",
            city: "İkamet Şehri",
            graduatedFrom: "Eğitim Durumu",
            role: "Tercih Ettiği Rol",
            response: {
                birthday: "16.07.1997",
                city: "Ankara",
                graduatedFrom: "Düzce Üni. Makine Mühendisliği Lisans, 2020",
                role: "Fullstack Developer"
            },
            aboutMe: "Hakkımda",
            aboutMeFirstP: "TÜRKÇE LOREM ipsum, dolor sit amet consectetur adipisicing elit. ",
            aboutMeSecondP: "TÜRKÇE Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
        },
        projects: {
            title: "Projelerim",
            visit: "Siteyi Görüntüle",
            projectsArray: [
                {
                    title: "Pizza Sitesi",
                    img: pizzaResim,
                    description: "TÜRKÇE A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    programs: ["Redux", "React", "Yup"],
                    site:"https://pizza-sitesi-wheat.vercel.app"
                },
                {
                    title: "Todolist Sitesi",
                    img: todolist,
                    description: "TÜRKÇE A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    programs: ["React", "Redux", "Vercel"],
                    site:"https://to-do-list-six-ochre.vercel.app"
                },

            ]
        },
        footer: {
            title: "Bana mesaj gönderin!",
            description: "Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Devam edin...",
            mail: "burakcevizli@gmail.com"
        }
    },






    en: {
        header: {
            name: "BURAK",
            title: "I am a Frontend",
            titleSecond: "Developer...",
            description: "...who likes to craft solid and scalable frontend products with great user experiences.",
            to: "TÜRKÇE",
            languageSwitch: "'YE GEÇ"
        },
        skills: {
            skils: "Skills",
            skillsArray1: [JavascriptLogo, ReactLogo, ReduxLogo],
            skillsArray2: [NodeLogo, VsCodeLogo, FigmaLogo],
            skillsDarkArray1: [JavascriptDark, ReactDark, ReduxDark],
            skillsDarkArray2: [nodeDark, vsDark, figmaDark]
        },
        profile: {
            profile: "Profile",
            title: "Basic Information",
            birthday: "Birthday",
            city: "City",
            graduatedFrom: "Educational Background",
            role: "Preferred Role",
            response: {
                birthday: "16.07.1997",
                city: "Ankara",
                graduatedFrom: "Duzce Uni. Mechanical Engineering, 2020",
                role: "Fullstack Developer"
            },
            aboutMe: "About Me",
            aboutMeFirstP: "ENG Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
            aboutMeSecondP: "ENG Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        },
        projects: {
            title: "Projects",
            visit: "View Site",
            projectsArray: [
                {
                    title: "Pizza Site",
                    img: pizzaResim,
                    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    programs: ["Redux", "React", "Yup"],
                    site:"https://pizza-sitesi-wheat.vercel.app"
                },
                {
                    title: "Todolist Site",
                    img: todolist,
                    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    programs: ["React", "Redux", "Vercel"],
                    site:"https://to-do-list-six-ochre.vercel.app"
                }
            ]
        },
        footer: {
            title: "Send me a message!",
            description: "Got a question or proposal, or just want to say hello? Go ahead.",
            mail: "burakcevizli@gmail.com"
        }
    }
}

export default data;