import './Profi.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 150,
  info:
    'Hedy Lamarr foi uma atriz e inventora austro-americana. Ela é mais conhecida por sua beleza e sua carreira de atriz, mas também é lembrada por sua contribuição para a tecnologia moderna. Ela inventou o sistema de comunicação sem fio usado em telecomunicações, como telefones celulares e Wi-Fi. Ela também patenteou uma bomba de profundidade controlada a distância para uso militar durante a Segunda Guerra Mundial.'
}

export default function Profi() {
  return (
    <>
      <section className='card-section'>
        <div className='card'>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
          />
          <p>{user.info}</p>
        </div>
      </section>
    </>
  );
}

