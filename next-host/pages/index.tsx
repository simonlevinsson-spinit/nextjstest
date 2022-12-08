import type {NextPage} from 'next';
import useNextHostTranslation from "../i18n/useNextHostTranslation";
import dynamic from "next/dynamic";
// @ts-ignore
const ReactRemoteContent = dynamic(() => import("reactRemote/Content"), {ssr: false});
import i18nService from "../../i18next-shared-lib/src/i18nService";
import Link from 'next/link'// @ts-ignore

const Home: NextPage = () => {
    const { t } = useNextHostTranslation('next-main');
    const switchLanguage = () => {
        i18nService.switchLanguage();
    }
    return (
        <main style={
            {
                border: 'dashed 5px red',
                padding: 20
            }
        }>
            <header style={
                {
                    marginBottom: 10
                }
            }>
                <h1>Next Host</h1>
            </header>
            <section style={
                {
                    marginBottom: 10
                }
            }>
                <p>{t('mainText')}</p>
                {t('intlNumber', { val: 10800.687 })}
                <button onClick={switchLanguage}>{t('changeLanguageButtonLabel')}</button>
                {i18nService.getCurrentLanguage()}
                <Link  href="/test">Go to remote component</Link>
            </section>
            <section>
                <h2>{`${t('remoteChildTitle')} :`}</h2>
                <ReactRemoteContent/>
            </section>
        </main>
    );
}

export default Home
