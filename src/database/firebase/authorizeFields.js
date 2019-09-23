const biographyKeep = ["availability",
    "coverImage",
    "coverTitle",
    "description",
    "email",
    "experience1",
    "experience10",
    "experience2",
    "experience3",
    "experience4",
    "experience5",
    "experience6",
    "experience7",
    "experience8",
    "experience9",
    "experienceLevel1",
    "experienceLevel10",
    "experienceLevel2",
    "experienceLevel3",
    "experienceLevel4",
    "experienceLevel5",
    "experienceLevel6",
    "experienceLevel7",
    "experienceLevel8",
    "experienceLevel9",
    "experiencePrimary",
    "experienceSecondary",
    "facebook",
    "firstname",
    "github",
    "id",
    "index",
    "language1",
    "language2",
    "language3",
    "lastname",
    "linkedin",
    "location",
    "phone",
    "secondname",
    "skype",
    "twitter",
    "pdfGuest"
];

const employmentKeep = [
    "dateFrom",
    "dateTo",
    "position",
    "id",
    "index"
];

const educationKeep = [
    "dateFrom",
    "dateTo",
    "grade",
    "id",
    "index"
];

const portfolioKeep = [];

/**
 * (Remove Fields) After authorization - decide which fields to remove according to user auth group
 * @param collection - collection name
 * @param data - document data object
 * @param authGroup - authorized user group
 * @return Object - authorized fields
 */
export default (collection, data, authGroup) => {
    //console.log(collection, data, authGroup)
    if (authGroup === "guest") {
        switch (collection) {
            case "biography":
                for (const key in data) {
                    if (biographyKeep.indexOf(key) === -1) {
                        delete data[key];
                    }
                }
                return data;
            case "employment":
                for (const key in data) {
                    if (employmentKeep.indexOf(key) === -1) {
                        delete data[key];
                    }
                }
                return data;
            case "education":
                for (const key in data) {
                    if (educationKeep.indexOf(key) === -1) {
                        delete data[key];
                    }
                }
                return data;
            case "portfolio":
                for (const key in data) {
                    if (portfolioKeep.indexOf(key) === -1) {
                        delete data[key];
                    }
                }
                return data;
            default:
                return data;
        }
    }
    else if (authGroup === "admin" || authGroup === "viewer") {
        //console.log("data admin viewer", data)
        return data;
    }
}