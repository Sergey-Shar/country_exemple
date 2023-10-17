import { Header, SearchControl, CountryList } from './components'
import { ThemeProvider, CountryProvider } from './context'

export const App = () => {
 return (
		<ThemeProvider>
			<Header />
			<CountryProvider>
				<SearchControl />
				<CountryList />
			</CountryProvider>
		</ThemeProvider>
	)
}
 
