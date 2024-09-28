const getLogo = (providedLog: string, type = "single") => {
    return providedLog ? providedLog : type === "single" ? "/profile-logo.jpg" : "";
}

export default getLogo