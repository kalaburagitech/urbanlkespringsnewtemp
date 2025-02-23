export function useRouter() {
    const [currentPath, setCurrentPath] = React.useState(window.location.hash || '#home');

    React.useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(window.location.hash || '#home');
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return currentPath;
}
