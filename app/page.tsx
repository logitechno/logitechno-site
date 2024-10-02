import ClientHome from '@/app/client';
export const runtime = 'edge';

const getTime = (): string => {
    return new Date().toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Etc/GMT-3'
    });
}

const Home = async () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const birthday = day == 24 && month == 7;
    return (
        <ClientHome birthday={birthday} timeServer={getTime()} />
    )
}

export default Home;
export const dynamic = 'force-dynamic';