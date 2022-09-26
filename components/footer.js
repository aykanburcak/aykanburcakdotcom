import Container from './container/container'
import {getYear} from "../utils";

export default function Footer({settings}) {
  return (
    <footer>
      <Container>
        {settings?.copyright && (
          <div>{settings.copyright} {getYear()}</div>
        )}
      </Container>
    </footer>
  )
}
