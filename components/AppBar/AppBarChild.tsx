import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

export default function AppBarChild ({data,styleFocused}) {
    const { ref, focused } = useFocusable();

    return (
        <div ref={ref}
            style= {focused ? {...data.style,...styleFocused}: data.style}
            >
            <div>
                {data.image}
            </div>
            <div>
                {data.text}
            </div>
        </div>
    );
}