import Spinner from '@/assets/ui-kit/spinner/spinner';

export default function Loading() {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1', fontSize: '2em'}}>
            <Spinner variant='accent' size='lg'  />
        </div>
    );
}