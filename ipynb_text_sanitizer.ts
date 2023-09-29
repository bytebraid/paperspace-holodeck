const deepReplace = (obj: object, keyName: string, replacer: (from: any) => string) => {
    for (const key in obj) {
        if (key === keyName) {
            obj[key] = replacer(obj[key]);
        } else if (Array.isArray(obj[key])) {
            (obj[key] as any[]).forEach(member => deepReplace(member, keyName, replacer));
        } else if (typeof obj[key] === "object") {
            deepReplace(obj[key], keyName, replacer);
        }
    }
};

datobj = {}

deepReplace(datobj, "text", ()  => [])
console.log(JSON.stringify(datobj,0,1 ))