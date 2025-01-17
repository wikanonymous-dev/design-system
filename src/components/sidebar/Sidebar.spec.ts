import { render } from '@testing-library/vue'
import Sidebar from './Sidebar.vue'

it('should rendered properly without any props', () => {
  const screen = render({
    components: { Sidebar },
    template  : `
      <Sidebar>
      </Sidebar>
    `,
  })

  const sidebar = screen.queryByTestId('sidebar')

  expect(sidebar).toBeInTheDocument()
  expect(sidebar).toHaveClass('sidebar')
})

it('should be abble to change variant via prop `variant`', () => {
  const screen = render({
    components: { Sidebar },
    template  : `
      <Sidebar variant="lines">
      </Sidebar>
    `,
  })

  const sidebar = screen.queryByTestId('sidebar')

  expect(sidebar).toBeInTheDocument()
  expect(sidebar).toHaveClass('sidebar--lines')
  expect(sidebar).not.toHaveClass('sidebar--pills')
})

it('should be able to change type via prop `type`', () => {
  const screen = render({
    components: { Sidebar },
    template  : `
      <Sidebar type="narrow">
      </Sidebar>
    `,
  })

  const sidebar = screen.queryByTestId('sidebar')

  expect(sidebar).toBeInTheDocument()
  expect(sidebar).toHaveClass('sidebar--narrow', 'sidebar--pills')
})

it('should be able to set alignment via prop `align`', () => {
  const screen = render({
    components: { Sidebar },
    template  : `
      <Sidebar align="right">
      </Sidebar>
    `,
  })

  const sidebar = screen.queryByTestId('sidebar')

  expect(sidebar).toBeInTheDocument()
  expect(sidebar).toHaveClass('sidebar--right')
})

it('should be able to make sidebar fixed via prop `fixed`', () => {
  const screen = render({
    components: { Sidebar },
    template  : `
      <Sidebar fixed>
      </Sidebar>
    `,
  })

  const sidebar = screen.queryByTestId('sidebar')

  expect(sidebar).toBeInTheDocument()
  expect(sidebar).toHaveClass('sidebar--fixed')
})
