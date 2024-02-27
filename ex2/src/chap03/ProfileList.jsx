import Profile from './Profile';

const profiles = [
    {
        name: '서빈',
        age: 26,
        gender: '남자',
        comment: '본체',
    },
    {
        name: '서빈주니어2세',
        age: 26,
        gender: '남자',
        comment: '이두',
    },
    {
        name: '서빈주니어3세',
        age: 26,
        gender: '남자',
        comment: '삼두',
    }
];

function ProfileList(props) {
    return (
        <div>
            {profiles.map((profile) => {
                return (
                    <Profile
                        name={profile.name}
                        age={profile.age}
                        gender={profile.gender}
                        comment={profile.comment}
                    />
                );
            })}
        </div>
    );
}

export default ProfileList;