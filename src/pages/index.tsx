import HomeTemplate, { HomeTemplateProps } from 'templates/Home'
import { buildLocale } from 'utils'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getStaticProps() {
  try {
    const locales = await fetch(process.env.ECOVIAS_URL as string)
      .then((res) => res.json())
      .then(buildLocale)

    return {
      props: {
        locales,
        error: false
      },
      revalidate: 3000
    }
  } catch (error) {
    return {
      props: {
        locales: [],
        error: true
      },
      revalidate: 1000
    }
  }
}
