import Document, { Head, Main, NextScript } from 'next/document'

class RopeGirlTemplate extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta charSet="UTF-8"/>
                <title>HelloWorld</title>
                <meta name="description" content={""}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/static/favicon.ico"/>
                <link rel="stylesheet" href="/_next/static/style.css" />
                <link rel="stylesheet" href="/static/css/global.css" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}

export default RopeGirlTemplate