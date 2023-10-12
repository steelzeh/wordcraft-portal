import Avatar from '@/components/shared/Avatar';

const activity: any[] = [
  {
    id: 1,
    person: { name: 'Thomas Egelund', href: '#' },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    person: { name: 'Lucas Sørensen', href: '#' },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 3,
    person: { name: 'Eduardo Benz', href: '#' },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function DashboardFeed() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <Avatar />
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm">
                      <a href={activityItem.person.href} className="font-medium text-gray-900">
                        {activityItem.person.name}
                      </a>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Updated translation {activityItem.date}</p>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>{activityItem.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
