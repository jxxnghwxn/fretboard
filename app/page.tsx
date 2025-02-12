import FretboardSet from '@/app/components/FretboardSet';
import FretboardGet from '@/app/components/FretboardGet';
import Test from '@/app/components/test';

export default function Home() {
  return (
    <div>
      <FretboardSet />
      <FretboardGet />
      <Test />
    </div>
  );
}
