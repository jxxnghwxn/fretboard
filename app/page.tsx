import FretboardSet from '@/app/components/FretboardSet';
import FretboardGet from '@/app/components/FretboardGet';
import Test from '@/app/components/test';
import Test1 from '@/app/components/test1';

export default function Home() {
  return (
    <div>
      <FretboardSet />
      <FretboardGet />
      <Test />
      <Test1 />
    </div>
  );
}
