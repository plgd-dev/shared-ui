export const formatCertName = (cert: any) => {
    if (cert.subject.cn) {
        return `CN: ${cert.subject.cn}`
    } else if (cert.subject.ou) {
        return `OU: ${cert.subject.ou}`
    } else if (cert.subject.o) {
        return `O: ${cert.subject.o}`
    }

    return ''
}

export const findCertName = (data: any) => {
    let name = ''

    data.forEach((d: any) => {
        if (name === '') {
            name = formatCertName(d)
        }
    })

    return name
}
