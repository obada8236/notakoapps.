document.addEventListener("DOMContentLoaded", function () {
    const appListElement = document.getElementById("appList");
    const appDetailsElement = document.getElementById("appDetails");
    const detailsContentElement = document.getElementById("detailsContent");
    const searchInputElement = document.getElementById("searchInput");

    const apps = [
        {
            name: "Video Star ++",
            image: "https://scontent.famm2-3.fna.fbcdn.net/v/t1.15752-9/413458672_383609087472183_9054088351413408909_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFr7nDH0scJWy70Be5jJrLwwRfC8Zphc0bBF8LxmmFzRrgVcVzHaG-jB-1-pxWldewQDV45HWovwJkMOBIdepYR&_nc_ohc=tOPhKL9U3_UAX_Su-6I&_nc_ht=scontent.famm2-3.fna&oh=03_AdRgYcVRO6D1XZ45MLYwC33x_7Ghtd8rR99GU-R-AKIhQw&oe=65B75AA0",
            description: "نُقدم لكم نسخة مُعدلة ومدفوعة من تطبيق Video Star تدعم جميع الأكواد وجميع التأثيرات والفلاتر",
            downloadLink: "رابط التنزيل 1"
        },
        {
            name: "IMovie",
            image: "https://scontent.famm2-3.fna.fbcdn.net/v/t1.15752-9/413936374_375026885072122_6214918752711707844_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFkeeJNWLG0IaKpSGg0YdN6A0-j0G2OIGEDT6PQbY4gYezM2MetmcoOXtdm-jcqDmHlOj0PfideZ46Wiis-dFu0&_nc_ohc=zlHEoY9FFQoAX9yPWS1&_nc_ht=scontent.famm2-3.fna&oh=03_AdRXDmdqU6InFnvk2ToJFSjsM8tJXxNGbyNmmUJAM5KRNw&oe=65B78077",
            description: "نُقدم لكم النسخة القديمة من تطبيق IMovie تعمل بدون مشاكل أو اعطال الانتقالات",
            downloadLink: "رابط التنزيل 2"
        }
    ];

    const temporaryAppsData = apps.slice();

    function showAppDetails(app) {
        detailsContentElement.innerHTML = `
            <img src="${app.image}" alt="${app.name}">
            <h2>${app.name}</h2>
            <p>${app.description}</p>
            <div>
            <a class="backb" href="index.HTML">Back</a> 
            <a class="downloadb"href="${app.downloadLink}">Download</a>
            </div>
        `;
        appDetailsElement.style.display = "flex";
        appListElement.style.display = "none";
    }

    function downloadApp(downloadLink) {
        // قم بإضافة سلوك تنزيل التطبيق هنا
        alert("جارٍ تنزيل التطبيق...");
    }

    function goBack() {
        appDetailsElement.style.display = "none";
        appListElement.style.display = "flex";
    }

    function searchApps(searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

        if (lowerCaseSearchTerm === "") {
            appListElement.style.display = "flex";
            appDetailsElement.style.display = "none";
            searchInputElement.value = "";
            return;
        }

        var filteredApps = temporaryAppsData.filter(function (appData) {
            return appData.name.toLowerCase().includes(lowerCaseSearchTerm);
        });

        appListElement.innerHTML = "";
        filteredApps.forEach(function (appData) {
            var appDiv = document.createElement("div");
            appDiv.classList.add("app");
            appDiv.innerHTML = `
                <img src="${appData.image}" alt="${appData.name}">
                <h3>${appData.name}</h3>
                <p>${appData.description}</p>
            `;
            appDiv.addEventListener("click", function () {
                showAppDetails(appData);
            });
            appListElement.appendChild(appDiv);
        });

        appDetailsElement.style.display = "none";
    }

    searchInputElement.addEventListener("input", function () {
        searchApps(this.value);
    });

    apps.forEach(app => {
        const appElement = document.createElement("div");
        appElement.className = "app";
        appElement.innerHTML = `
            <img src="${app.image}" alt="${app.name}">
            <p>${app.name}</p>
        `;
        appElement.addEventListener("click", () => showAppDetails(app));
        appListElement.appendChild(appElement);
    });
});
