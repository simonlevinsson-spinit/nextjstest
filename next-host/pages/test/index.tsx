import { NextPage } from "next";
import dynamic from "next/dynamic";
// @ts-ignore
const ReactRemoteContent = dynamic(() => import("reactRemote/Content"), {ssr: false});

const test: NextPage = () => {
    return (<ReactRemoteContent/>);
}

export default test
