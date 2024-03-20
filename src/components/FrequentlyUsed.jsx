import { nanoid } from 'nanoid';
import { UserAuth } from '../context/AuthContext';
import FrequrntlyItem from './FrequrntlyItem';

function FrequentlyUsed() {
    const data = UserAuth().Frequentlydata;

    return (
        <div className='border-t-[10px] p-16 border-[#232323]'>
            <div className="container mx-auto text-white">
                <h2 className='text-center text-4xl md:text-5xl font-bold'>Frequently Asked Questions</h2>
                <div className='my-8'>
                    {
                        data.map(item => <FrequrntlyItem obj={item} key={nanoid()} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FrequentlyUsed