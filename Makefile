# @desandro only

zip:
	rm -rf build/infinite-scroll-docs.zip
	cp -r build infinite-scroll-docs
	zip -rq build/infinite-scroll-docs.zip infinite-scroll-docs/
	rm -rf infinite-scroll-docs

deploy:
	netlify deploy --dir=build

gulp:
	npx gulp

gulp-export:
	rm -rf build/
	npx gulp export
	make zip

prod: gulp-export gulp deploy
